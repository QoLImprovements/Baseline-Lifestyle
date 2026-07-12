/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cereal bars",
  "id": "usda-fndds-2708087",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    }
  ],
  "name": "Cereal or granola bar (Kellogg's Special K bar)",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 72.7,
    "energy_kcal": 409.0,
    "fat_g": 9.09,
    "fibre_g": 1.8,
    "folate_ug": 15.0,
    "iron_mg": 2.56,
    "magnesium_mg": 46.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 136.0,
    "potassium_mg": 143.0,
    "protein_g": 9.09,
    "salt_g": 1.07,
    "sat_fat_g": 0.0,
    "sodium_mg": 428.0,
    "sugar_g": 31.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.94,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708087",
  "state": "Unspecified",
  "subcategory": "Cereal bars",
  "tags": [
    "cereal-bars",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
