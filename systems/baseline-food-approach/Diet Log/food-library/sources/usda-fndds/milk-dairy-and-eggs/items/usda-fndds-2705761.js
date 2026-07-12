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
  "id": "usda-fndds-2705761",
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
      "gramsPerUnit": 28.35,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
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
  "name": "Cream cheese, regular, flavored",
  "nutritionPerBasis": {
    "calcium_mg": 165.0,
    "carbs_g": 14.1,
    "energy_kcal": 275.0,
    "fat_g": 20.6,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 0.06,
    "magnesium_mg": 12.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 223.0,
    "potassium_mg": 160.0,
    "protein_g": 8.23,
    "salt_g": 1.435,
    "sat_fat_g": 12.1,
    "sodium_mg": 574.0,
    "sugar_g": 13.0,
    "vitamin_a_ug": 169.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705761",
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
