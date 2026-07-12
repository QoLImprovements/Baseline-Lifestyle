/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "serving-1-nlea-serving-about-4-crackers",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167529",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "serving-1-nlea-serving-about-4-crackers",
      "kind": "unit",
      "label": "serving (1 NLEA serving - about 4 crackers)"
    },
    {
      "gramsPerUnit": 12.7,
      "key": "cracker",
      "kind": "unit",
      "label": "cracker"
    }
  ],
  "name": "Crackers, snack, Goya Crackers",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 64.4,
    "energy_kcal": 1810.0,
    "fat_g": 13.4,
    "fibre_g": 3.8,
    "folate_ug": 0.0,
    "iron_mg": 5.66,
    "magnesium_mg": 39.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 145.0,
    "potassium_mg": 124.0,
    "protein_g": 14.2,
    "salt_g": 1.6625,
    "sat_fat_g": 6.32,
    "sodium_mg": 665.0,
    "sugar_g": 2.35,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167529",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
