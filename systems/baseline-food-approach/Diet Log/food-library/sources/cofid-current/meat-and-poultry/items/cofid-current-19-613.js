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
  "id": "cofid-current-19-613",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Meatballs, pork and beef, in tomato sauce, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 4.6,
    "energy_kcal": 123.0,
    "fat_g": 7.2,
    "fibre_g": 0.9,
    "folate_ug": 11.0,
    "iron_mg": 1.15,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 108.0,
    "potassium_mg": 285.0,
    "protein_g": 10.0,
    "salt_g": 0.15,
    "sat_fat_g": 2.69,
    "sodium_mg": 60.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 20.0,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-613",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "meat-and-poultry",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
