/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "7 samples, 5 brands of thin and thick sausages, chilled/frozen",
  "id": "cofid-current-19-662",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sausages, pork, reduced fat, fried in vegetable oil",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 8.8,
    "energy_kcal": 144.0,
    "fat_g": 5.7,
    "fibre_g": 2.3,
    "folate_ug": 5.0,
    "iron_mg": 1.2,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 200.0,
    "potassium_mg": 210.0,
    "protein_g": 14.9,
    "salt_g": 1.4,
    "sat_fat_g": 1.92,
    "sodium_mg": 560.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-662",
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
