/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Calculated from raw. Water analysed, 2017. 11 samples, UK, including whole heads, hearts and sticks, stem only. Sliced and boiled for 5-10 minutes",
  "id": "cofid-current-13-637",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Celery, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 0.8,
    "energy_kcal": 5.1,
    "fat_g": 0.1,
    "fibre_g": 0.8,
    "folate_ug": 4.0,
    "iron_mg": 0.03,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 170.0,
    "protein_g": 0.3,
    "salt_g": 0.1075,
    "sat_fat_g": 0.0,
    "sodium_mg": 43.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 4.9
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-637",
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
