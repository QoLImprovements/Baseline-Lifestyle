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
  "id": "cofid-current-17-829",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, pea and ham, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 9.8,
    "energy_kcal": 73.0,
    "fat_g": 2.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.99,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 56.0,
    "potassium_mg": 194.0,
    "protein_g": 4.1,
    "salt_g": 0.5875,
    "sat_fat_g": 1.07,
    "sodium_mg": 235.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 183.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-829",
  "state": "Unspecified",
  "subcategory": "WAA",
  "tags": [
    "meat-and-poultry",
    "unspecified",
    "waa"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
