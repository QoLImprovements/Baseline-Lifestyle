/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "9 samples, 4 brands, includes thin base and deep pan, chilled",
  "id": "cofid-current-11-1012",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pizza, chicken topped, retail",
  "nutritionPerBasis": {
    "calcium_mg": 217.0,
    "carbs_g": 31.3,
    "energy_kcal": 246.0,
    "fat_g": 8.3,
    "fibre_g": 2.7,
    "folate_ug": 9.0,
    "iron_mg": 1.3,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 270.0,
    "protein_g": 13.4,
    "salt_g": 0.95,
    "sat_fat_g": 0.0,
    "sodium_mg": 380.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1012",
  "state": "Unspecified",
  "subcategory": "AE",
  "tags": [
    "ae",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
