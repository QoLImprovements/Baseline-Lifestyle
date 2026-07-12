/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "container-individual",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171261",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "container-individual",
      "kind": "unit",
      "label": "container, individual"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Cream substitute, liquid, with hydrogenated vegetable oil and soy protein",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 11.4,
    "energy_kcal": 568.0,
    "fat_g": 9.97,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.03,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 191.0,
    "protein_g": 1.0,
    "salt_g": 0.1675,
    "sat_fat_g": 1.94,
    "sodium_mg": 67.0,
    "sugar_g": 11.4,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171261",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
