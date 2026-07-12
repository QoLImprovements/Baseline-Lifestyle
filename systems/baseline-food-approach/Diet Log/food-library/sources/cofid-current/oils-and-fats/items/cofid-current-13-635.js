/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Calculated from boiled. Fat and water analysed, 2017. 11 samples, fresh, all imported. Stir-fried in 1.5-4 tbsp oil for 3-5 minutes",
  "id": "cofid-current-13-635",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sweetcorn, baby, stir-fried in rapeseed oil",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 5.4,
    "energy_kcal": 84.25,
    "fat_g": 6.0,
    "fibre_g": 2.8,
    "folate_ug": 187.0,
    "iron_mg": 0.29,
    "magnesium_mg": 25.0,
    "omega3_g": 0.55,
    "phosphorus_mg": 59.0,
    "potassium_mg": 170.0,
    "protein_g": 2.5,
    "salt_g": 0.0,
    "sat_fat_g": 0.49,
    "sodium_mg": 0.0,
    "sugar_g": 4.5,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 1.44,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-635",
  "state": "Fried",
  "subcategory": "DG",
  "tags": [
    "dg",
    "fried",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
