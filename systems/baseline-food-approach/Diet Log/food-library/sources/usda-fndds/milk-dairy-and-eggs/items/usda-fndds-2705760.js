/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-individual-container",
  "description": "Cream cheese, sour cream, whipped cream",
  "id": "usda-fndds-2705760",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
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
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cream cheese, regular, plain",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 4.56,
    "energy_kcal": 343.0,
    "fat_g": 33.5,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.0,
    "magnesium_mg": 9.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 108.0,
    "potassium_mg": 125.0,
    "protein_g": 5.79,
    "salt_g": 0.92,
    "sat_fat_g": 19.7,
    "sodium_mg": 368.0,
    "sugar_g": 3.76,
    "vitamin_a_ug": 274.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705760",
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
