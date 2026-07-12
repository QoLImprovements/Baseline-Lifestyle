/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "12 samples including chicken, chicken and ham, chicken and mushroom and chicken and vegetable pies. 10.5-25% meat, chilled and frozen",
  "id": "cofid-current-19-515",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, chicken, individual, baked",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 24.6,
    "energy_kcal": 288.0,
    "fat_g": 17.7,
    "fibre_g": 1.7,
    "folate_ug": 8.0,
    "iron_mg": 0.8,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 90.0,
    "potassium_mg": 140.0,
    "protein_g": 9.0,
    "salt_g": 0.675,
    "sat_fat_g": 7.0,
    "sodium_mg": 270.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-515",
  "state": "Baked",
  "subcategory": "MI",
  "tags": [
    "baked",
    "meat-and-poultry",
    "mi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
