/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "quantity-not-specified",
  "description": "Not included in a food category",
  "id": "usda-fndds-2710612",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Fruit flavored drink, with high vitamin C, powdered, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 385.0,
    "carbs_g": 98.9,
    "energy_kcal": 386.0,
    "fat_g": 0.0,
    "fibre_g": 0.4,
    "folate_ug": 0.0,
    "iron_mg": 0.02,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 151.0,
    "potassium_mg": 190.0,
    "protein_g": 0.0,
    "salt_g": 0.0425,
    "sat_fat_g": 0.0,
    "sodium_mg": 17.0,
    "sugar_g": 92.3,
    "vitamin_a_ug": 599.0,
    "vitamin_c_mg": 231.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710612",
  "state": "Unspecified",
  "subcategory": "Not included in a food category",
  "tags": [
    "beverages",
    "not-included-in-a-food-category",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
