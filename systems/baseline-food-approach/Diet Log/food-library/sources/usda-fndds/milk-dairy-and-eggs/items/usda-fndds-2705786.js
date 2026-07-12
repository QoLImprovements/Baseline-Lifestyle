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
  "id": "usda-fndds-2705786",
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
  "name": "Cheese dip",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 7.86,
    "energy_kcal": 163.0,
    "fat_g": 13.3,
    "fibre_g": 0.3,
    "folate_ug": 15.0,
    "iron_mg": 0.56,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 27.0,
    "protein_g": 3.14,
    "salt_g": 1.64,
    "sat_fat_g": 3.08,
    "sodium_mg": 656.0,
    "sugar_g": 0.29,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.98,
    "vitamin_k_ug": 10.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705786",
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
