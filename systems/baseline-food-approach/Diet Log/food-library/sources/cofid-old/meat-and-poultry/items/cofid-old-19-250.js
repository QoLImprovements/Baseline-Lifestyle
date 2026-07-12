/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Coated crispy pancakes. 4 samples of the same brand. 10% meat",
  "id": "cofid-old-19-250",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pancakes, chicken, frozen, shallow-fried in vegetable oil",
  "nutritionPerBasis": {
    "calcium_mg": 85.0,
    "carbs_g": 28.7,
    "energy_kcal": 260.0,
    "fat_g": 14.2,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.9,
    "magnesium_mg": 16.0,
    "omega3_g": 0.84,
    "phosphorus_mg": 100.0,
    "potassium_mg": 170.0,
    "protein_g": 6.2,
    "salt_g": 1.7,
    "sat_fat_g": 1.4,
    "sodium_mg": 680.0,
    "sugar_g": 3.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.73,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-250",
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
