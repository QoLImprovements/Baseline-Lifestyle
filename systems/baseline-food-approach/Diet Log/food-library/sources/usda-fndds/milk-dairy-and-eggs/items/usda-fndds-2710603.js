/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Smoothies and grain drinks",
  "id": "usda-fndds-2710603",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Horchata, made with milk",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 19.6,
    "energy_kcal": 91.0,
    "fat_g": 0.63,
    "fibre_g": 0.4,
    "folate_ug": 28.0,
    "iron_mg": 0.57,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 41.0,
    "protein_g": 1.42,
    "salt_g": 0.0225,
    "sat_fat_g": 0.323,
    "sodium_mg": 9.0,
    "sugar_g": 9.56,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710603",
  "state": "Unspecified",
  "subcategory": "Smoothies and grain drinks",
  "tags": [
    "milk-dairy-and-eggs",
    "smoothies-and-grain-drinks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
