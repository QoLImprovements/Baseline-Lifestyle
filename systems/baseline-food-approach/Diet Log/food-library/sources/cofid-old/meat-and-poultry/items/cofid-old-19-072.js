/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 4 brands",
  "id": "cofid-old-19-072",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Steak and kidney pudding, canned",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 17.7,
    "energy_kcal": 204.0,
    "fat_g": 11.6,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 1.3,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 75.0,
    "potassium_mg": 110.0,
    "protein_g": 8.3,
    "salt_g": 1.0,
    "sat_fat_g": 5.3,
    "sodium_mg": 400.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-072",
  "state": "Canned",
  "subcategory": "MI",
  "tags": [
    "canned",
    "meat-and-poultry",
    "mi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
