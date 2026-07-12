/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-individual-container",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2705449",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    },
    {
      "gramsPerUnit": 60.0,
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
  "name": "Vegetable dip, yogurt based",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 3.76,
    "energy_kcal": 191.0,
    "fat_g": 16.0,
    "fibre_g": 0.3,
    "folate_ug": 12.0,
    "iron_mg": 0.29,
    "magnesium_mg": 13.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 115.0,
    "potassium_mg": 141.0,
    "protein_g": 8.16,
    "salt_g": 1.6025,
    "sat_fat_g": 3.23,
    "sodium_mg": 641.0,
    "sugar_g": 2.99,
    "vitamin_a_ug": 74.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 44.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705449",
  "state": "Unspecified",
  "subcategory": "Dips, gravies, other sauces",
  "tags": [
    "dips-gravies-other-sauces",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
