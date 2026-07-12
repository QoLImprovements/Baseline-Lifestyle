/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-173254",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 67.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "George Weston Bakeries, Brownberry Sage and Onion Stuffing Mix, dry",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 72.7,
    "energy_kcal": 390.0,
    "fat_g": 5.1,
    "fibre_g": 5.4,
    "folate_ug": 0.0,
    "iron_mg": 3.81,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 13.3,
    "salt_g": 4.2,
    "sat_fat_g": 0.9,
    "sodium_mg": 1680.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173254",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
