/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 10 products, including chicken and mushroom and chicken and bacon",
  "id": "cofid-current-19-469",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken/turkey pasties/slices, puff pastry",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 23.9,
    "energy_kcal": 289.0,
    "fat_g": 18.5,
    "fibre_g": 2.9,
    "folate_ug": 3.0,
    "iron_mg": 0.68,
    "magnesium_mg": 15.0,
    "omega3_g": 0.18,
    "phosphorus_mg": 81.0,
    "potassium_mg": 169.0,
    "protein_g": 8.1,
    "salt_g": 0.9,
    "sat_fat_g": 9.17,
    "sodium_mg": 360.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.38,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-469",
  "state": "Unspecified",
  "subcategory": "MI",
  "tags": [
    "meat-and-poultry",
    "mi",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
