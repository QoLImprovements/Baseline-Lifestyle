/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "2 assorted samples, barbecued pork",
  "id": "cofid-old-11-344",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Meat buns, Chinese",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 38.4,
    "energy_kcal": 265.0,
    "fat_g": 9.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.8,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 120.0,
    "protein_g": 8.8,
    "salt_g": 0.875,
    "sat_fat_g": 0.0,
    "sodium_mg": 350.0,
    "sugar_g": 9.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-344",
  "state": "Unspecified",
  "subcategory": "AT",
  "tags": [
    "at",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
