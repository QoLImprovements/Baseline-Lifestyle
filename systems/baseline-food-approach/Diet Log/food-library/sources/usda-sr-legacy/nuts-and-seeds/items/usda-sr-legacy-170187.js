/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "cup-ground",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170187",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "cup-ground",
      "kind": "unit",
      "label": "cup, ground"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "cup-in-shell-edible-yield-7-nuts",
      "kind": "unit",
      "label": "cup, in shell, edible yield (7 nuts)"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "cup-pieces-or-chips",
      "kind": "unit",
      "label": "cup pieces or chips"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "cup-shelled-50-halves",
      "kind": "unit",
      "label": "cup shelled (50 halves)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-14-halves",
      "kind": "unit",
      "label": "oz (14 halves)"
    }
  ],
  "name": "Nuts, walnuts, english",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 13.7,
    "energy_kcal": 654.0,
    "fat_g": 65.2,
    "fibre_g": 6.7,
    "folate_ug": 98.0,
    "iron_mg": 2.91,
    "magnesium_mg": 158.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 346.0,
    "potassium_mg": 441.0,
    "protein_g": 15.2,
    "salt_g": 0.005,
    "sat_fat_g": 6.13,
    "sodium_mg": 2.0,
    "sugar_g": 2.61,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170187",
  "state": "Unspecified",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
