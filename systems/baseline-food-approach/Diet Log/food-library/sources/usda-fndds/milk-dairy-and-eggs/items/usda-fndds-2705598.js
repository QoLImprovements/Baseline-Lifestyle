/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cream cheese, sour cream, whipped cream",
  "id": "usda-fndds-2705598",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cream, whipped",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 9.49,
    "energy_kcal": 346.0,
    "fat_g": 33.4,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.0,
    "magnesium_mg": 6.0,
    "omega3_g": 0.027,
    "phosphorus_mg": 54.0,
    "potassium_mg": 91.0,
    "protein_g": 1.9,
    "salt_g": 0.05,
    "sat_fat_g": 19.2,
    "sodium_mg": 20.0,
    "sugar_g": 8.55,
    "vitamin_a_ug": 308.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705598",
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
