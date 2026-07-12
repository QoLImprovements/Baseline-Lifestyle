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
  "id": "usda-fndds-2705762",
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
  "name": "Cream cheese, light",
  "nutritionPerBasis": {
    "calcium_mg": 182.0,
    "carbs_g": 5.59,
    "energy_kcal": 264.0,
    "fat_g": 22.7,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.06,
    "magnesium_mg": 13.0,
    "omega3_g": 0.021,
    "phosphorus_mg": 246.0,
    "potassium_mg": 176.0,
    "protein_g": 9.09,
    "salt_g": 1.1975,
    "sat_fat_g": 13.3,
    "sodium_mg": 479.0,
    "sugar_g": 4.33,
    "vitamin_a_ug": 186.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705762",
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
