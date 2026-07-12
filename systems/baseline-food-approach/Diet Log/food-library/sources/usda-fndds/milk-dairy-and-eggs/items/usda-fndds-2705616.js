/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-tablespoon",
  "description": "Cream cheese, sour cream, whipped cream",
  "id": "usda-fndds-2705616",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
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
    }
  ],
  "name": "Sour cream, fat free",
  "nutritionPerBasis": {
    "calcium_mg": 125.0,
    "carbs_g": 15.6,
    "energy_kcal": 74.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.0,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 129.0,
    "protein_g": 3.1,
    "salt_g": 0.3525,
    "sat_fat_g": 0.0,
    "sodium_mg": 141.0,
    "sugar_g": 0.39,
    "vitamin_a_ug": 73.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705616",
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
