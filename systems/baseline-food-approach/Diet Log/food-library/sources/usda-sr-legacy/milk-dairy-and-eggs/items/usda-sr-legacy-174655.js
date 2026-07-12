/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "3-tablespoon-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174655",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "3-tablespoon-1-nlea-serving",
      "kind": "unit",
      "label": "3 tablespoon (1 NLEA serving)"
    },
    {
      "gramsPerUnit": 174.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 13.8,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Cereals, CREAM OF WHEAT, 2 1/2 minute cook time, dry",
  "nutritionPerBasis": {
    "calcium_mg": 882.0,
    "carbs_g": 71.8,
    "energy_kcal": 1480.0,
    "fat_g": 1.41,
    "fibre_g": 4.4,
    "folate_ug": 0.0,
    "iron_mg": 32.0,
    "magnesium_mg": 46.0,
    "omega3_g": 0.037,
    "phosphorus_mg": 398.0,
    "potassium_mg": 160.0,
    "protein_g": 11.6,
    "salt_g": 0.82,
    "sat_fat_g": 0.253,
    "sodium_mg": 328.0,
    "sugar_g": 0.47,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174655",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
