/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece-1-serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167938",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "piece-1-serving",
      "kind": "unit",
      "label": "piece (1 serving)"
    }
  ],
  "name": "Pan Dulce, La Ricura, Salpora de Arroz con Azucar, cookie-like, contains wheat flour and rice flour",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 66.3,
    "energy_kcal": 1860.0,
    "fat_g": 16.1,
    "fibre_g": 1.2,
    "folate_ug": 0.0,
    "iron_mg": 2.52,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 297.0,
    "potassium_mg": 94.0,
    "protein_g": 8.81,
    "salt_g": 1.1125,
    "sat_fat_g": 0.0,
    "sodium_mg": 445.0,
    "sugar_g": 21.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167938",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
