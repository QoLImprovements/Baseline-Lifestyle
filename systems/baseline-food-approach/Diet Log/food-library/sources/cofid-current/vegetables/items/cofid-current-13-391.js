/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Peeled thinly, diced and boiled 19 minutes, based on boiled in salted water",
  "id": "cofid-current-13-391",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Turnip, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 2.0,
    "energy_kcal": 12.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.2,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 200.0,
    "protein_g": 0.6,
    "salt_g": 0.07,
    "sat_fat_g": 0.0,
    "sodium_mg": 28.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.15
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-391",
  "state": "Boiled",
  "subcategory": "DG",
  "tags": [
    "boiled",
    "dg",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
