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
  "id": "cofid-current-19-566",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Risotto, chicken, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 25.3,
    "energy_kcal": 173.0,
    "fat_g": 3.3,
    "fibre_g": 0.8,
    "folate_ug": 0.0,
    "iron_mg": 0.44,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 98.0,
    "potassium_mg": 165.0,
    "protein_g": 8.9,
    "salt_g": 0.8875,
    "sat_fat_g": 1.54,
    "sodium_mg": 355.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-566",
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
