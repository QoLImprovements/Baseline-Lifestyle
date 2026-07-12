/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170583",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Nuts, hazelnuts or filberts, dry roasted, without salt added",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 17.6,
    "energy_kcal": 2700.0,
    "fat_g": 62.4,
    "fibre_g": 9.4,
    "folate_ug": 88.0,
    "iron_mg": 4.38,
    "magnesium_mg": 173.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 310.0,
    "potassium_mg": 755.0,
    "protein_g": 15.0,
    "salt_g": 0.0,
    "sat_fat_g": 4.51,
    "sodium_mg": 0.0,
    "sugar_g": 4.89,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 15.3,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170583",
  "state": "Roasted",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
