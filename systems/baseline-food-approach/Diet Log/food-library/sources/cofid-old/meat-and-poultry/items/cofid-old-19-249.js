/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Coated crispy pancakes. 4 samples, 2 brands. 15-16% meat",
  "id": "cofid-old-19-249",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pancakes, beef, frozen, shallow-fried in vegetable oil",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 24.7,
    "energy_kcal": 262.0,
    "fat_g": 15.7,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 1.1,
    "magnesium_mg": 16.0,
    "omega3_g": 0.83,
    "phosphorus_mg": 95.0,
    "potassium_mg": 190.0,
    "protein_g": 7.1,
    "salt_g": 1.6,
    "sat_fat_g": 2.2,
    "sodium_mg": 640.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.72,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-249",
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
