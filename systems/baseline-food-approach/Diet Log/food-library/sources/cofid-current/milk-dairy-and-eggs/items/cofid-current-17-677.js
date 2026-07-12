/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Label data",
  "id": "cofid-current-17-677",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Dips, sour-cream based, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 7.3,
    "energy_kcal": 180.0,
    "fat_g": 15.2,
    "fibre_g": 0.1,
    "folate_ug": 0.0,
    "iron_mg": 0.54,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 106.0,
    "potassium_mg": 175.0,
    "protein_g": 3.9,
    "salt_g": 0.375,
    "sat_fat_g": 4.4,
    "sodium_mg": 150.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-677",
  "state": "Unspecified",
  "subcategory": "WCG",
  "tags": [
    "milk-dairy-and-eggs",
    "unspecified",
    "wcg"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
