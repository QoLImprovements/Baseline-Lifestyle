/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-17-810",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, minestrone, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 7.6,
    "energy_kcal": 60.0,
    "fat_g": 2.3,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.5,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 140.0,
    "protein_g": 2.1,
    "salt_g": 0.9725,
    "sat_fat_g": 0.64,
    "sodium_mg": 389.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-810",
  "state": "Unspecified",
  "subcategory": "WAA",
  "tags": [
    "soups",
    "unspecified",
    "waa"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
