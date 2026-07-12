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
  "id": "cofid-current-19-638",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Turkey and pasta bake, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 76.0,
    "carbs_g": 7.2,
    "energy_kcal": 130.0,
    "fat_g": 5.6,
    "fibre_g": 1.0,
    "folate_ug": 11.0,
    "iron_mg": 0.54,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 152.0,
    "potassium_mg": 228.0,
    "protein_g": 12.0,
    "salt_g": 0.355,
    "sat_fat_g": 2.49,
    "sodium_mg": 142.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-638",
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
