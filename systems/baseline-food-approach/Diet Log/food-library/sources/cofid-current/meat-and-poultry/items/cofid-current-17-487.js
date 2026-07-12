/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "5 samples, different brands",
  "id": "cofid-current-17-487",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Dripping, beef",
  "nutritionPerBasis": {
    "calcium_mg": 1.0,
    "carbs_g": 0.0,
    "energy_kcal": 891.0,
    "fat_g": 99.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.2,
    "magnesium_mg": 0.0,
    "omega3_g": 0.44,
    "phosphorus_mg": 13.0,
    "potassium_mg": 4.0,
    "protein_g": 0.0,
    "salt_g": 0.0125,
    "sat_fat_g": 50.62,
    "sodium_mg": 5.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 24.5
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-487",
  "state": "Unspecified",
  "subcategory": "OF",
  "tags": [
    "meat-and-poultry",
    "of",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
