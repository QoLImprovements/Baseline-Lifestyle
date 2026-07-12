/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "puff",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170048",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "puff",
      "kind": "unit",
      "label": "puff"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 79.0,
      "key": "10-puffs",
      "kind": "unit",
      "label": "10 puffs"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "10-crispy-crowns",
      "kind": "unit",
      "label": "10 Crispy Crowns"
    }
  ],
  "name": "Potato puffs, frozen, oven-heated",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 27.3,
    "energy_kcal": 802.0,
    "fat_g": 9.05,
    "fibre_g": 2.0,
    "folate_ug": 23.0,
    "iron_mg": 0.58,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 84.0,
    "potassium_mg": 287.0,
    "protein_g": 2.13,
    "salt_g": 1.1575,
    "sat_fat_g": 1.66,
    "sodium_mg": 463.0,
    "sugar_g": 0.27,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170048",
  "state": "Frozen",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "frozen",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
