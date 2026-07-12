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
  "id": "cofid-current-19-587",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Kheema, beef, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 4.6,
    "energy_kcal": 160.0,
    "fat_g": 10.8,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 2.17,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 113.0,
    "potassium_mg": 261.0,
    "protein_g": 11.7,
    "salt_g": 0.11,
    "sat_fat_g": 3.69,
    "sodium_mg": 44.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 3.86
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-587",
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
