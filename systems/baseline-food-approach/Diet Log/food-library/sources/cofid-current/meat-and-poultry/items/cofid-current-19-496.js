/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 9 brands; loose and prepacked including honey roast and smoked Ham. Added water 10-15%",
  "id": "cofid-current-19-496",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ham",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 1.0,
    "energy_kcal": 107.0,
    "fat_g": 3.3,
    "fibre_g": 0.1,
    "folate_ug": 19.0,
    "iron_mg": 0.7,
    "magnesium_mg": 24.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 340.0,
    "potassium_mg": 340.0,
    "protein_g": 18.4,
    "salt_g": 2.0,
    "sat_fat_g": 1.1,
    "sodium_mg": 800.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-496",
  "state": "Unspecified",
  "subcategory": "MAA",
  "tags": [
    "maa",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
