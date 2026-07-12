/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Made up with an equal volume of water",
  "id": "cofid-current-17-363",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mustard, powder, made up",
  "nutritionPerBasis": {
    "calcium_mg": 170.0,
    "carbs_g": 10.4,
    "energy_kcal": 226.0,
    "fat_g": 14.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 4.8,
    "magnesium_mg": 130.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 90.0,
    "potassium_mg": 470.0,
    "protein_g": 14.5,
    "salt_g": 0.0075,
    "sat_fat_g": 0.8,
    "sodium_mg": 3.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-363",
  "state": "Unspecified",
  "subcategory": "WY",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "wy"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
