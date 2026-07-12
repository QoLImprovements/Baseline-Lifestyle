/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Cream cheese, sour cream, whipped cream",
  "id": "usda-fndds-2705769",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Cream cheese, fat free",
  "nutritionPerBasis": {
    "calcium_mg": 351.0,
    "carbs_g": 7.66,
    "energy_kcal": 105.0,
    "fat_g": 1.0,
    "fibre_g": 0.0,
    "folate_ug": 35.0,
    "iron_mg": 0.19,
    "magnesium_mg": 22.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 523.0,
    "potassium_mg": 278.0,
    "protein_g": 15.7,
    "salt_g": 1.755,
    "sat_fat_g": 0.644,
    "sodium_mg": 702.0,
    "sugar_g": 5.48,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705769",
  "state": "Unspecified",
  "subcategory": "Cream cheese, sour cream, whipped cream",
  "tags": [
    "cream-cheese-sour-cream-whipped-cream",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
