/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Fruits and Fruit Juices",
  "id": "usda-foundation-2747675",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Watermelon, seedless, flesh only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 7.86,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 11.9,
    "iron_mg": 0.021,
    "magnesium_mg": 11.4,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.1,
    "potassium_mg": 117.0,
    "protein_g": 0.871,
    "salt_g": 0.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.0,
    "sugar_g": 7.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.46,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2747675",
  "state": "Raw",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
