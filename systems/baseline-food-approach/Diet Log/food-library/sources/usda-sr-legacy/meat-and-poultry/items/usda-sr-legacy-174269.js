/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "patty",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-174269",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "patty",
      "kind": "unit",
      "label": "patty"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "link",
      "kind": "unit",
      "label": "link"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Sausage, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 8.09,
    "energy_kcal": 1070.0,
    "fat_g": 18.2,
    "fibre_g": 2.8,
    "folate_ug": 26.0,
    "iron_mg": 3.72,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 225.0,
    "potassium_mg": 231.0,
    "protein_g": 20.3,
    "salt_g": 2.22,
    "sat_fat_g": 2.93,
    "sodium_mg": 888.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174269",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
