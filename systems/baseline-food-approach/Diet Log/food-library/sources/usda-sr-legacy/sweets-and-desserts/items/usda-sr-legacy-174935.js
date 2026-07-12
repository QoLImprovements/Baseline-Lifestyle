/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174935",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 517.0,
      "key": "package-18-25-oz",
      "kind": "unit",
      "label": "package (18.25 oz)"
    }
  ],
  "name": "Cake, pudding-type, chocolate, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 133.0,
    "carbs_g": 80.2,
    "energy_kcal": 1630.0,
    "fat_g": 8.14,
    "fibre_g": 2.3,
    "folate_ug": 54.0,
    "iron_mg": 2.92,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 286.0,
    "potassium_mg": 337.0,
    "protein_g": 4.6,
    "salt_g": 2.165,
    "sat_fat_g": 3.5,
    "sodium_mg": 866.0,
    "sugar_g": 39.5,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.65,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174935",
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
