/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "11 samples, 4 brands, chilled and frozen",
  "id": "cofid-old-19-036",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Burger, beef, low fat, fried",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 0.4,
    "energy_kcal": 193.0,
    "fat_g": 10.8,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 3.6,
    "magnesium_mg": 30.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 230.0,
    "potassium_mg": 440.0,
    "protein_g": 23.6,
    "salt_g": 2.075,
    "sat_fat_g": 5.0,
    "sodium_mg": 830.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-036",
  "state": "Fried",
  "subcategory": "MI",
  "tags": [
    "fried",
    "meat-and-poultry",
    "mi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
