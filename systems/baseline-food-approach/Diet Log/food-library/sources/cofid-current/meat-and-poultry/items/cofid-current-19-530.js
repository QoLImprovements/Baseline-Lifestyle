/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-19-530",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beef, stir-fried with green peppers, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 6.1,
    "energy_kcal": 145.0,
    "fat_g": 8.0,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 1.88,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 122.0,
    "potassium_mg": 274.0,
    "protein_g": 11.8,
    "salt_g": 0.53,
    "sat_fat_g": 2.67,
    "sodium_mg": 212.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 38.0,
    "vitamin_e_mg": 1.54,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-530",
  "state": "Fried",
  "subcategory": "MR",
  "tags": [
    "fried",
    "meat-and-poultry",
    "mr"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
