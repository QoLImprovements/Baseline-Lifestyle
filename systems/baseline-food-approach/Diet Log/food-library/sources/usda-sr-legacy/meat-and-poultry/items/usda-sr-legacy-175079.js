/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "nlea-serving-makes-1-2-cup-prepared",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175079",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "nlea-serving-makes-1-2-cup-prepared",
      "kind": "unit",
      "label": "NLEA serving (makes 1/2 cup prepared)"
    }
  ],
  "name": "Kraft, Stove Top Stuffing Mix Chicken Flavor",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 73.1,
    "energy_kcal": 1590.0,
    "fat_g": 4.1,
    "fibre_g": 2.5,
    "folate_ug": 80.0,
    "iron_mg": 4.32,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 129.0,
    "potassium_mg": 267.0,
    "protein_g": 12.6,
    "salt_g": 3.825,
    "sat_fat_g": 0.8,
    "sodium_mg": 1530.0,
    "sugar_g": 10.1,
    "vitamin_a_ug": 107.0,
    "vitamin_c_mg": 3.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175079",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
