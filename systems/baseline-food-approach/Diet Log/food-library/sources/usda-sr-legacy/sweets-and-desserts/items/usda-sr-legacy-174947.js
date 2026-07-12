/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174947",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 524.0,
      "key": "package-18-50-oz",
      "kind": "unit",
      "label": "package (18.50 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cake, yellow, enriched, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 211.0,
    "carbs_g": 81.9,
    "energy_kcal": 374.0,
    "fat_g": 3.5,
    "fibre_g": 1.2,
    "folate_ug": 68.0,
    "iron_mg": 2.08,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 310.0,
    "potassium_mg": 47.0,
    "protein_g": 3.7,
    "salt_g": 1.82,
    "sat_fat_g": 1.62,
    "sodium_mg": 728.0,
    "sugar_g": 43.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174947",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
