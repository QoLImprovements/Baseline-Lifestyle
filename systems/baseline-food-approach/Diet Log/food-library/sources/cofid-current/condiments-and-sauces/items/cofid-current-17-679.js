/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "12 samples, 8 brands",
  "id": "cofid-current-17-679",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mayonnaise, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 8.2,
    "energy_kcal": 288.0,
    "fat_g": 28.1,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.34,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 7.0,
    "protein_g": 1.0,
    "salt_g": 0.0,
    "sat_fat_g": 2.12,
    "sodium_mg": 0.0,
    "sugar_g": 4.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 8.33,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-679",
  "state": "Unspecified",
  "subcategory": "WCG",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "wcg"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
