/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "racc",
  "description": "Fruits and Fruit Juices",
  "id": "usda-foundation-2346414",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Applesauce, unsweetened, with added vitamin C",
  "nutritionPerBasis": {
    "calcium_mg": 3.82,
    "carbs_g": 12.3,
    "energy_kcal": 51.6,
    "fat_g": 0.162,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.045,
    "magnesium_mg": 3.94,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.12,
    "potassium_mg": 108.0,
    "protein_g": 0.273,
    "salt_g": 0.00126,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.504,
    "sugar_g": 9.66,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 43.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2346414",
  "state": "Unspecified",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
