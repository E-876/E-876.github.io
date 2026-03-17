<?php
header('Content-Type: application/json');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: 0');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['json'])) {
    $json = $_POST['json'];
    
    // Validar JSON
    json_decode($json);
    if (json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo json_encode(['error' => 'JSON inválido: ' . json_last_error_msg()]);
        exit;
    }
    
    // Caminho do arquivo
    $filePath = __DIR__ . '/feed.json';
    
    // Salvar arquivo
    $result = file_put_contents($filePath, $json, LOCK_EX);
    
    if ($result !== false) {
        echo json_encode(['success' => true, 'message' => 'Arquivo salvo com sucesso']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Erro ao salvar arquivo. Verifique permissões.']);
    }
} else {
    http_response_code(400);
    echo json_encode(['error' => 'Requisição inválida']);
}
?>