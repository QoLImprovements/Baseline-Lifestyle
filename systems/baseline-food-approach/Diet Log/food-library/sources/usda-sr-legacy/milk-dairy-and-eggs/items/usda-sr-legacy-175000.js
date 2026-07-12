/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175000",
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
      "gramsPerUnit": 29.0,
      "key": "large-waffle-cone",
      "kind": "unit",
      "label": "large waffle cone"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "cone",
      "kind": "unit",
      "label": "cone"
    }
  ],
  "name": "Ice cream cones, cake or wafer-type",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 79.0,
    "energy_kcal": 1740.0,
    "fat_g": 6.9,
    "fibre_g": 3.0,
    "folate_ug": 173.0,
    "iron_mg": 3.6,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 112.0,
    "protein_g": 8.1,
    "salt_g": 0.64,
    "sat_fat_g": 1.22,
    "sodium_mg": 256.0,
    "sugar_g": 6.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175000",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
