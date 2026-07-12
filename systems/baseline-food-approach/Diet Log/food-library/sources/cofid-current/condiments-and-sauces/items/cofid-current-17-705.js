/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Literature sources (1980)",
  "id": "cofid-current-17-705",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Barbecue sauce",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 36.1,
    "energy_kcal": 140.0,
    "fat_g": 0.1,
    "fibre_g": 1.2,
    "folate_ug": 5.0,
    "iron_mg": 0.6,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 240.0,
    "protein_g": 1.0,
    "salt_g": 1.575,
    "sat_fat_g": 0.0,
    "sodium_mg": 630.0,
    "sugar_g": 29.9,
    "vitamin_a_ug": 84.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-705",
  "state": "Unspecified",
  "subcategory": "WCN",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "wcn"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
